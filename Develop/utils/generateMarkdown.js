// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const url = encodeURI(`https://img.shields.io/badge/license-${license}-blue.svg`);
  return `![${license}](${url})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    ['GNU AGPLv3']: 'https://choosealicense.com/licenses/agpl-3.0/',
    ['GNU GPLv3']: 'https://choosealicense.com/licenses/gpl-3.0/',
    ['GNU LGPLv3']: 'https://choosealicense.com/licenses/lgpl-3.0/',
    ['Mozilla Public License 2.0']: 'https://choosealicense.com/licenses/mpl-2.0/',
    ['Apache License 2.0']: 'https://choosealicense.com/licenses/apache-2.0/',
    ['MIT License']: 'https://choosealicense.com/licenses/mit/',
    ['Boost Software License 1.0']: 'https://choosealicense.com/licenses/bsl-1.0/',
    ['The Unlicense']: 'https://choosealicense.com/licenses/unlicense/',
    ['']: ''
  }
  return licenses[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenses = {
    ['GNU AGPLv3']: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`,
    ['GNU GPLv3']: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`,
    ['GNU LGPLv3']: `Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
    Everyone is permitted to copy and distribute verbatim copies
    of this license document, but changing it is not allowed.`,
    ['Mozilla Public License 2.0']: `This License is not intended to limit any rights You have under
    applicable copyright doctrines of fair use, fair dealing, or other
    equivalents.`,
    ['Apache License 2.0']: `Copyright 2021 Landa`,
    ['MIT License']: `Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:`,
    ['Boost Software License 1.0']: `Permission is hereby granted, free of charge, to any person or organization
    obtaining a copy of the software and accompanying documentation covered by
    this license (the "Software") to use, reproduce, display, distribute,
    execute, and transmit the Software, and to prepare derivative works of the
    Software, and to permit third-parties to whom the Software is furnished to
    do so, all subject to the following:`,
    ['The Unlicense']: ``,
    ['']: ''
  }
  return licenses[license];
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**\n
>## **_Description_**\n
${data.description}\n
---
### **_Table of Contents_**\n
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Features](#features)
* [Contribution](#contribution)
* [License](#license)
>## **_Installation_**\n
\`\`\`
${data.installation}
\`\`\`\n
>## **_Usage_**\n
${data.usage}\n
>## **_Credits_**\n
${data.credits}\n
>## **_Features_**\n
${data.features}\n
>## **_Contributing_**\n
If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.\n
${data.contribution}\n
>## **_License_**\n
${renderLicenseBadge(data.license)}\n
${renderLicenseSection(data.license)}\n
${renderLicenseLink(data.license)}\n
`;
}

module.exports = generateMarkdown;