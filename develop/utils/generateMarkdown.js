function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description:
  ${data.description}
  
  ## Table of Contents:
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)

  ## Installation:  
  ${data.install}
  
  ## Usage:
  ${data.usage}
  
  ## License:
  ${data.license}

  ## Contributing:
  ${data.contributors}

  ## Testing:
  ${data.testing}

  ## Questions:
  Any questions about this code? Feel free to contact me on [Github] at (https://github.com/${data.github})
  or contact me via email at ${data.email}
  `;
};

module.exports = generateMarkdown;
