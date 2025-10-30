name: 🐛 Bug Report
description: Create a report to help us improve the NeedsBoxes Theme.
title: "bug: A brief, descriptive title"
body:
  - type: checkboxes
    attributes:
      label: Prerequisites
      description: Please ensure you have completed the following.
      options:
        - label: I have searched for [existing issues](https://github.com/bakhe8/Master/issues) that already report this problem, without success.
          required: true
  - type: checkboxes
    attributes:
      label: Theme Version
      description: Please select which version of the theme this issue impacts.
      options:
        - label: v1.x
  - type: dropdown
    id: issue_type
    attributes:
      label: Issue Context
      description: Where in the theme does this bug occur?
      options:
        - Homepage
        - Product Page
        - Other
    validations:
      required: true
  - type: textarea
    attributes:
      label: Current Behavior
      description: A clear description of what the bug is and how it manifests.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Expected Behavior
      description: A clear description of what you expected to happen.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Steps to Reproduce
      description: Please explain the steps required to duplicate this issue.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Environment Info
      description: Please provide your browser and operating system.
    validations:
      required: true
  - type: textarea
    attributes:
      label: Additional Information
      description: List any other information that is relevant to your issue. Stack traces, related issues, suggestions on how to fix, Stack Overflow links, forum links, etc.