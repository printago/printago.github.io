import os
import json

# Base structure of the documentation
DOCS_STRUCTURE = {
    "getting-started": {
        "position": 1,
        "description": "Get started with Printago",
        "files": ["intro", "quick-setup", "key-concepts", "system-requirements"]
    },
    "core-features": {
        "position": 2,
        "description": "Learn about Printago core features",
        "subdirs": {
            "printer-connectivity": {
                "position": 1,
                "description": "Connect and manage your printers",
                "files": ["bambu-lab-integration", "octoprint-integration", "printago-fuse"]
            },
            "file-management": {
                "position": 2,
                "description": "Manage your files and SKUs",
                "files": ["supported-files", "sku-management"],
                "subdirs": {
                    "openscad": {
                        "position": 1,
                        "description": "Work with OpenSCAD files",
                        "files": ["getting-started", "dynamic-models", "parameters", "fonts"]
                    }
                }
            },
            "smart-queue": {
                "position": 3,
                "description": "Manage your print queue efficiently",
                "files": ["queue-management", "printer-assignment", "material-matching"]
            },
            "cloud-slicer": {
                "position": 4,
                "description": "Cloud slicing capabilities",
                "files": ["profiles", "configuration", "bambu-sync"]
            }
        }
    },
    "advanced-features": {
        "position": 3,
        "description": "Advanced Printago features",
        "files": ["fabmatic", "multi-actions", "user-tags", "global-search", 
                 "material-tracking", "retail-integration", "printer-sharing"]
    },
    "api": {
        "position": 4,
        "description": "Printago API documentation",
        "files": ["authentication", "endpoints", "examples", "best-practices"]
    },
    "troubleshooting": {
        "position": 5,
        "description": "Troubleshooting and support",
        "files": ["common-issues", "faq", "support"]
    }
}

def create_category_json(path, label, position, description):
    """Create a _category_.json file"""
    category_content = {
        "label": label.replace("-", " ").title(),
        "position": position,
        "link": {
            "type": "generated-index",
            "description": description
        }
    }
    with open(os.path.join(path, "_category_.json"), "w") as f:
        json.dump(category_content, f, indent=2)

def create_markdown_file(path, name):
    """Create a markdown file with frontmatter"""
    title = name.replace("-", " ").title()
    content = f"""---
sidebar_position: 1
---

# {title}

Description of {title} goes here.

## Overview

Add content here...

## Features

- Feature 1
- Feature 2
- Feature 3

## Usage

Add usage examples here...
"""
    with open(os.path.join(path, f"{name}.md"), "w") as f:
        f.write(content)

def create_structure(base_path, structure, current_path=""):
    """Recursively create the documentation structure"""
    for section, config in structure.items():
        # Create directory
        dir_path = os.path.join(base_path, current_path, section)
        os.makedirs(dir_path, exist_ok=True)
        
        # Create category file
        create_category_json(
            dir_path, 
            section,
            config.get("position", 1),
            config.get("description", f"Documentation for {section}")
        )
        
        # Create markdown files
        if "files" in config:
            for file in config["files"]:
                create_markdown_file(dir_path, file)
        
        # Process subdirectories
        if "subdirs" in config:
            create_structure(base_path, config["subdirs"], os.path.join(current_path, section))

def main():
    # Set the base path to the docs directory
    base_path = "docs"
    
    # Create the structure
    create_structure(base_path, DOCS_STRUCTURE)
    
    print("Documentation structure created successfully!")

if __name__ == "__main__":
    main()