name: Sync Project to Roadmap
on:
  workflow_dispatch:

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Fetch Project Data
        uses: actions/github-script@v6
        with:
          script: |
            const query = 'query{organization(login:"printago"){projectV2(number:2){items(first:100){nodes{fieldValues(first:100){nodes{...on ProjectV2ItemFieldTextValue{text field{name}}...on ProjectV2ItemFieldDateValue{date field{name}}...on ProjectV2ItemFieldSingleSelectValue{name field{name}}}}}}}}}'
            const result = await github.graphql(query)
            let markdown = '---\ntitle: Roadmap\n---\n\n# Printago Roadmap\n\n'
            result.organization.projectV2.items.nodes.forEach(item => {
              const fields = {}
              item.fieldValues.nodes.forEach(field => {
                if (field.field) fields[field.field.name] = field.text || field.date || field.name
              })
              if (fields.Title) {
                markdown += '## ' + fields.Title + '\n\n'
                if (fields.Status) markdown += '**Status:** ' + fields.Status + '\n\n'
                if (fields.Description) markdown += fields.Description + '\n\n'
                markdown += '---\n\n'
              }
            })
            require('fs').writeFileSync('./docs/roadmap.md', markdown)
      - name: Push to Review Branch
        run: |
          git config user.name "GitHub Action"
          git config user.email "action@github.com"
          git checkout -b roadmap-updates
          git add docs/roadmap.md
          git commit -m "Update roadmap from project board" || exit 0
          git push -f origin roadmap-updates