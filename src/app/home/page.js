// 'use client';

// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   Button,
//   Tabs,
//   Tab,
//   TabList,
//   TabPanels,
//   TabPanel,
//   Grid,
//   Column,
//   TextInput,
// } from '@carbon/react';
// import Image from 'next/image';

// export default function LandingPage() {
//   // Function to call Watson AI for code generation
//   const callWatsonAI = () => {
//     // Retrieve inputs
//     const functionDescription = document.getElementById('function-description').value;
//     const variable1 = document.getElementById('variable1').value;
//     const variable2 = document.getElementById('variable2').value;

//     // Replace this with your actual call to Watson AI
//     // For demonstration purposes, just generating a sample code
//     const generatedCode = generateJavaCode(functionDescription, variable1, variable2);

//     // Display generated code in the output canvas
//     document.getElementById('output-canvas').innerText = generatedCode;
//   };

//   // Function to generate Java code
//   const generateJavaCode = (functionDescription, variable1, variable2) => {
//     // Sample Java code generation logic
//     return `
// public class MyClass {
//   public static void main(String[] args) {
//     // ${functionDescription}
//     int ${variable1} = 10;
//     int ${variable2} = 20;
//     int result = ${variable1} + ${variable2};
//     System.out.println("Result: " + result);
//   }
// }
// `;
//   };

//   // Function to clear inputs and output
//   const clearInputs = () => {
//     document.getElementById('function-description').value = '';
//     document.getElementById('variable1').value = '';
//     document.getElementById('variable2').value = '';
//     document.getElementById('output-canvas').innerText = '';
//   };

//   return (
//     <Grid className="landing-page" fullWidth>
//       <Column lg={16} md={8} sm={4} className="landing-page__banner">
//         <Breadcrumb noTrailingSlash aria-label="Page navigation">
//           <BreadcrumbItem>
//             <a href="/">GenAI Assist</a>
//           </BreadcrumbItem>
//         </Breadcrumb>
//         <h1 className="landing-page__heading">
//           AI Java Code Generator
//         </h1>
//         {/* Input fields for function description, variable 1, and variable 2 */}
//         <TextInput id="function-description" labelText="Function Description:" placeholder="Enter function description" />
//         <TextInput id="variable1" labelText="Variable 1:" placeholder="Enter variable 1" />
//         <TextInput id="variable2" labelText="Variable 2:" placeholder="Enter variable 2" />
//         {/* Buttons to generate code and clear inputs/output */}
//         <Button onClick={callWatsonAI} kind="primary">Generate</Button>
//         <Button onClick={clearInputs} kind="secondary">Clear</Button>
//         {/* Output canvas to display generated code */}
//         <div id="output-canvas" className="output-canvas"></div>
//       </Column>
//       {/* Illustration */}
//       <Column md={4} lg={{ span: 8, offset: 7 }} sm={4}>
//         <Image
//           className="landing-page__illo"
//           src="/tab-illo.png"
//           alt="Carbon illustration"
//           width={786}
//           height={647}
//         />
//       </Column>
//     </Grid>
//   );
// }
// pages/landing-page.js

'use client';
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Grid,
  Column,
  TextInput,
} from '@carbon/react';
import Image from 'next/image';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { java } from 'react-syntax-highlighter/dist/esm/languages/hljs';
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { InfoSection, InfoCard } from '@/components/Info/Info';
import {
  Advocate,
  Globe,
  AcceleratingTransformation,
} from '@carbon/pictograms-react';
// Register the Java language for syntax highlighting
SyntaxHighlighter.registerLanguage('java', java);

export default function LandingPage() {
  const [code, setCode] = React.useState('');

  // Function to call Watson AI for code generation
  const callWatsonAI = () => {
    // Retrieve inputs
    const functionDescription = document.getElementById(
      'function-description'
    ).value;
    const variable1 = document.getElementById('variable1').value;
    const variable2 = document.getElementById('variable2').value;

    // Replace this with your actual call to Watson AI
    // For demonstration purposes, just generating a sample code
    const generatedCode = generateJavaCode(
      functionDescription,
      variable1,
      variable2
    );

    // Update code state with generated code
    setCode(generatedCode);
  };

  // Function to generate Java code
  const generateJavaCode = (functionDescription, variable1, variable2) => {
    // Sample Java code generation logic
    return `
// Sample Java code
public class MyClass {
  public static void main(String[] args) {
    // ${functionDescription}
    int ${variable1} = 10;
    int ${variable2} = 20;
    int result = ${variable1} + ${variable2};
    System.out.println("Result: " + result);
  }
}
`;
  };

  // Function to copy generated code to clipboard
  const copyToClipboard = () => {
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Code copied to clipboard!');
  };

  // Function to clear inputs and output
  const clearInputs = () => {
    document.getElementById('function-description').value = '';
    document.getElementById('variable1').value = '';
    document.getElementById('variable2').value = '';
    setCode('');
  };

  return (
    <Grid className="landing-page" fullWidth>
      <Column lg={16} md={8} sm={4} className="landing-page__banner">
        <Breadcrumb noTrailingSlash aria-label="Page navigation">
          <BreadcrumbItem>
            <a href="/">GenAI Assist</a>
          </BreadcrumbItem>
        </Breadcrumb>
        <h1 className="landing-page__heading">AI Java Code Generator</h1>
      </Column>

      <Column md={2} className="center-column"></Column>
      <Column md={6} className="center-column">
        <div className="landing-page__content">
          {/* Input fields for function description, variable 1, and variable 2 */}
          <div className="text-input-group">
            <TextInput
              id="function-description"
              labelText="Function Description:"
              placeholder="Enter function description"
              className="bold-label"
            />
          </div>
          <div className="input-row">
            <div className="text-input-group">
              <TextInput
                id="variable1"
                labelText="Variable 1:"
                placeholder="Enter variable 1"
                className="bold-label"
              />
            </div>
            <div className="text-input-group">
              <TextInput
                id="variable2"
                labelText="Variable 2:"
                placeholder="Enter variable 2"
                className="bold-label"
              />
            </div>
          </div>
          {/* Buttons to generate code and clear inputs/output */}
          <div className="button-row">
            <Button
              onClick={callWatsonAI}
              kind="primary"
              className="half-width-button"
            >
              Generate
            </Button>
            <Button
              onClick={clearInputs}
              kind="secondary"
              className="half-width-button"
            >
              Clear
            </Button>
          </div>
        </div>
      </Column>

      <Column md={6} className="center-column">
        {/* Output code snippet */}
        {code && (
          <div className="code-snippet">
            <SyntaxHighlighter language="java" style={solarizedDark}>
              {code}
            </SyntaxHighlighter>
            <Button onClick={copyToClipboard} kind="tertiary">
              Copy
            </Button>
          </div>
        )}
      </Column>
      <Column lg={16} md={8} sm={4} className="landing-page__r3">
        <InfoSection heading="The Principles" className="landing-page__r3">
          <InfoCard
            heading="watsonx is open"
            body="Our approach is open. You benefit from IBM models, the best open-source models, and even the models you co-create with us, to create flexible and fit-for-purpose enterprise solutions rather than relying on a single model. We leverage cutting-edge innovations from IBM Research and the open research community to ensure performance, customization, speed, and efficiency.
    "
            icon={() => <Advocate size={32} />}
          />
          <InfoCard
            heading="watsonx is trusted"
            body="Enterprises need to protect their proprietary data and IP, deploy in multiple environments, and be supported with tools to mitigate risks. At IBM, we prioritize AI you can trust. Watsonx.governance tracks data, curating methods, and models, enabling AI that can be updated to meet evolving business and regulatory requirements. IBM’s Center of Excellence for Generative AI helps clients operationalize the full AI lifecycle and develop ethically responsible generative AI solutions."
            icon={() => <AcceleratingTransformation size={32} />}
          />
          <InfoCard
            heading="watsonx is targeted"
            body="Consumer AI is not the same as enterprise AI. watsonx is designed to solve real business problems. At IBM, we focus on those domains that drive quick gains in productivity and time to value for enterprises – augmenting and automating HR, customer service, and code generation. We focus on use cases that are scalable and relevant to every industry."
            icon={() => <Globe size={32} />}
          />
          <InfoCard
            heading="watsonx is empowering"
            body="Watsonx empowers you to be an AI value creator, not just a user. With watsonx, you are not limited to just prompting someone else’s AI model with no control over the model or the data. Watsonx allows you to train, fine-tune and deploy, and govern the data and AI models you bring to the platform and own completely the value they create. This is important as more than 75% of enterprises seek to fine-tune open-source models or build their own for specific needs."
            icon={() => <Globe size={32} />}
          />
        </InfoSection>
      </Column>
    </Grid>
  );
}
