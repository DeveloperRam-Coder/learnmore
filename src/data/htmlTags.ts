// HTML Tags and Attributes with explanations

export interface HTMLTagTask {
  id: string;
  title: string;
  description: string;
  status: 'In Progress' | 'Backlog' | 'Todo' | 'Done' | 'Canceled';
  priority: 'High' | 'Medium' | 'Low';
  type: 'Documentation' | 'Feature' | 'Bug';
}

export const htmlTags: HTMLTagTask[] = [
  // Basic Document Structure - Beginner Level
  {
    id: 'HTML-001',
    title: "Understanding the HTML document structure",
    description: "The <!DOCTYPE> declaration defines the document type and HTML version. It must appear at the very beginning of an HTML document, before the <html> tag.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-002',
    title: "Working with the HTML root element",
    description: "The <html> element represents the root of an HTML document. All other elements must be descendants of this element. Attributes include 'lang' to specify language.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-003',
    title: "Understanding the document head section",
    description: "The <head> element contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-004',
    title: "Working with the document body",
    description: "The <body> element represents the content of an HTML document. There can be only one <body> element in a document.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-005',
    title: "Adding metadata with meta tags",
    description: "The <meta> element represents metadata that cannot be represented by other HTML meta-related elements. It can define character encoding, viewport settings, and more.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-006',
    title: "Setting the document title",
    description: "The <title> element defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text and any contained tags are not interpreted.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Text Content - Beginner Level
  {
    id: 'HTML-007',
    title: "Creating paragraphs in HTML",
    description: "The <p> element represents a paragraph. Paragraphs are block-level elements that typically render with a margin before and after the content.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-008',
    title: "Working with headings in HTML",
    description: "The <h1> to <h6> elements represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest. They help structure your content hierarchically.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-009',
    title: "Creating line breaks in text",
    description: "The <br> element produces a line break in text. It is useful for writing addresses or poems where the division of lines is significant.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-010',
    title: "Adding horizontal rules for thematic breaks",
    description: "The <hr> element represents a thematic break between paragraph-level elements. It is typically rendered as a horizontal line.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Text Formatting - Beginner Level
  {
    id: 'HTML-011',
    title: "Emphasizing text with em and strong",
    description: "The <em> element marks text that has stress emphasis, while <strong> indicates strong importance, seriousness, or urgency. They typically render as italic and bold text respectively.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-012',
    title: "Marking text with formatting elements",
    description: "Elements like <mark>, <small>, <del>, <ins>, <sub>, and <sup> provide semantic meaning for text highlighting, small print, deleted/inserted text, and subscript/superscript.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Links and Navigation - Beginner Level
  {
    id: 'HTML-013',
    title: "Creating hyperlinks with anchor tags",
    description: "The <a> element (anchor) creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL. Key attribute is 'href'.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-014',
    title: "Working with link attributes",
    description: "Anchor tags support attributes like 'target' to control how links open, 'download' for downloadable content, 'rel' for relationship information, and 'title' for tooltips.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-015',
    title: "Creating internal page navigation",
    description: "Using fragment identifiers with anchor tags allows for creating links to specific sections within the same page, enabling easy navigation in long documents.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Images and Media - Beginner to Intermediate Level
  {
    id: 'HTML-016',
    title: "Adding images to your webpage",
    description: "The <img> element embeds an image into the document. It requires the 'src' attribute to specify the image URL and 'alt' for alternative text.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-017',
    title: "Working with image attributes",
    description: "Image attributes like 'width', 'height', 'loading', and 'srcset' help control image display, loading behavior, and responsive image selection.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-018',
    title: "Adding audio content to webpages",
    description: "The <audio> element is used to embed sound content in documents. It may contain one or more audio sources with the <source> element, with different audio formats.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-019',
    title: "Embedding video content",
    description: "The <video> element embeds a media player for video playback. Like <audio>, it can contain multiple <source> elements and supports attributes for controls, autoplay, and more.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Lists - Beginner Level
  {
    id: 'HTML-020',
    title: "Creating unordered lists",
    description: "The <ul> element represents an unordered list of items, typically rendered as a bulleted list. Each list item is defined with the <li> element.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-021',
    title: "Working with ordered lists",
    description: "The <ol> element represents an ordered list of items, rendered as a numbered list. It supports attributes like 'start' and 'type' to control numbering.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-022',
    title: "Creating definition lists",
    description: "The <dl> element represents a description list, with <dt> (term) and <dd> (description) pairs. Useful for glossaries, metadata, and key-value presentations.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-023',
    title: "Nesting lists for hierarchical data",
    description: "Lists can be nested inside <li> elements to create hierarchical structures, useful for menus, outlines, and multi-level categorizations.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Tables - Intermediate Level
  {
    id: 'HTML-024',
    title: "Creating basic HTML tables",
    description: "The <table> element represents tabular data. Basic structure includes <tr> for rows, <th> for headers, and <td> for data cells.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-025',
    title: "Working with table sections",
    description: "Tables can be divided into <thead>, <tbody>, and <tfoot> sections for better organization and styling of header, body, and footer content.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-026',
    title: "Spanning rows and columns in tables",
    description: "The 'rowspan' and 'colspan' attributes allow cells to span multiple rows or columns, enabling complex table layouts and data presentations.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-027',
    title: "Adding captions and accessibility to tables",
    description: "The <caption> element provides a title for a table, while attributes like 'scope' and 'headers' improve table accessibility for screen readers.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Forms - Intermediate Level
  {
    id: 'HTML-028',
    title: "Creating HTML forms",
    description: "The <form> element represents a document section containing interactive controls for submitting information. Key attributes include 'action' and 'method'.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-029',
    title: "Working with text input fields",
    description: "The <input> element with type='text' creates basic text input fields. Attributes like 'placeholder', 'required', and 'pattern' enhance functionality.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-030',
    title: "Creating password fields",
    description: "The <input type='password'> creates a text field that masks input, suitable for sensitive information. Can be enhanced with 'minlength' and other validation attributes.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-031',
    title: "Working with checkboxes and radio buttons",
    description: "Input types 'checkbox' and 'radio' create selectable options. Radio buttons with the same 'name' form a group where only one can be selected.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-032',
    title: "Creating dropdown selection menus",
    description: "The <select> element creates a dropdown menu, with <option> elements for each choice. Supports attributes for multiple selection and grouping with <optgroup>.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-033',
    title: "Working with text areas for multi-line input",
    description: "The <textarea> element creates a multi-line plain-text editing control, useful for comments, reviews, or any longer text input.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-034',
    title: "Adding buttons to forms",
    description: "The <button> element or <input type='button'> creates clickable buttons. Types include 'submit', 'reset', and generic buttons for JavaScript actions.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-035',
    title: "Working with HTML5 form input types",
    description: "HTML5 introduced specialized input types like email, url, number, range, date, color, and more, providing built-in validation and appropriate UI controls.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-036',
    title: "Form validation techniques",
    description: "HTML5 offers built-in form validation through attributes like 'required', 'pattern', 'min', 'max', and input types. The <form> element's 'novalidate' can disable this.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-037',
    title: "Organizing forms with fieldset and legend",
    description: "The <fieldset> element groups related form controls, while <legend> provides a caption. This improves form organization and accessibility.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-038',
    title: "Using labels for form accessibility",
    description: "The <label> element associates text with form controls, improving usability and accessibility. Can be linked to inputs using 'for' attribute or by nesting.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  
  // Semantic HTML - Intermediate Level
  {
    id: 'HTML-039',
    title: "Understanding semantic HTML",
    description: "Semantic HTML uses tags that convey meaning about content structure and purpose, rather than just presentation. Benefits include accessibility, SEO, and code clarity.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-040',
    title: "Working with section elements",
    description: "The <section> element represents a standalone section of content. It should typically have a heading and is useful for thematic grouping of content.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-041',
    title: "Creating article containers",
    description: "The <article> element represents a self-contained composition that could be distributed independently, such as a news story, blog post, or forum entry.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-042',
    title: "Using aside for related content",
    description: "The <aside> element represents content tangentially related to the content around it, such as sidebars, pull quotes, or advertising.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-043',
    title: "Creating page headers with header",
    description: "The <header> element represents introductory content, typically a group of navigational aids or introductory content containing heading elements.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-044',
    title: "Adding footers to sections",
    description: "The <footer> element represents a footer for its nearest sectioning content or sectioning root element, typically containing author information, copyright data, or links.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-045',
    title: "Creating navigation menus",
    description: "The <nav> element represents a section of a page that links to other pages or to parts within the page - a section with navigation links.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-046',
    title: "Using main for primary content",
    description: "The <main> element represents the dominant content of the document. A document must not have more than one <main> element that doesn't have the hidden attribute.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-047',
    title: "Working with figure and figcaption",
    description: "The <figure> element represents self-contained content, potentially with a caption (<figcaption>). Typically used for illustrations, diagrams, photos, code listings, etc.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Divs and Spans - Beginner Level
  {
    id: 'HTML-048',
    title: "Using div for content division",
    description: "The <div> element is a generic container for flow content that by itself does not represent anything. It's used for grouping content for styling purposes.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-049',
    title: "Working with span for inline styling",
    description: "The <span> element is an inline generic container that doesn't inherently represent anything. It's used to group inline elements for styling or scripting purposes.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  
  // Advanced HTML Features - Advanced Level
  {
    id: 'HTML-050',
    title: "Working with iframes",
    description: "The <iframe> element represents a nested browsing context, embedding another HTML page into the current one. Useful for embedding external content like maps or videos.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-051',
    title: "Creating data lists for input suggestions",
    description: "The <datalist> element contains a set of <option> elements that represent predefined options for other controls, providing autocomplete suggestions for inputs.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-052',
    title: "Working with dialog elements",
    description: "The <dialog> element represents a dialog box or other interactive component, such as a modal or alert. Can be shown/hidden with the open attribute or JavaScript.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-053',
    title: "Using details and summary for expandable content",
    description: "The <details> element creates a disclosure widget with <summary> as its visible heading. When toggled, it shows or hides additional content without JavaScript.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-054',
    title: "Working with canvas for graphics",
    description: "The <canvas> element provides a resolution-dependent bitmap canvas for rendering graphics, animations, game visuals, or other visual images on the fly using JavaScript.",
    status: 'Todo',
    priority: 'Low',
    type: 'Documentation'
  },
  {
    id: 'HTML-055',
    title: "Using SVG in HTML documents",
    description: "Scalable Vector Graphics (SVG) can be embedded directly in HTML using the <svg> element, allowing for resolution-independent graphics with interactivity and animation.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-056',
    title: "Working with web components",
    description: "HTML templates, custom elements, and shadow DOM allow for creating reusable, encapsulated components with their own styling and behavior.",
    status: 'Todo',
    priority: 'Low',
    type: 'Documentation'
  },
  
  // HTML Metadata and Performance - Advanced Level
  {
    id: 'HTML-057',
    title: "Optimizing HTML for SEO",
    description: "Techniques for improving search engine visibility include proper heading structure, semantic HTML, meta descriptions, structured data, and canonical URLs.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  },
  {
    id: 'HTML-058',
    title: "Working with Open Graph protocol",
    description: "Open Graph meta tags control how URLs are displayed when shared on social media, specifying images, title, description, and other content for rich previews.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-059',
    title: "Implementing resource hints",
    description: "Link elements with rel='preload', 'prefetch', 'preconnect', etc. provide hints to browsers about resources that will be needed, improving page load performance.",
    status: 'Todo',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'HTML-060',
    title: "Working with responsive images",
    description: "The 'srcset' and 'sizes' attributes for <img>, along with the <picture> element, enable serving different images based on device capabilities and viewport size.",
    status: 'Todo',
    priority: 'High',
    type: 'Documentation'
  }
];

export const cssTags: HTMLTagTask[] = [
  {
    id: 'TASK-4521',
    title: "We need to override the primary CSS selector!",
    description: "The 'color' property sets the color of text. Values can be color names, HEX values, RGB, RGBA, HSL, or HSLA values.",
    status: 'In Progress',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'TASK-3356',
    title: "Try to navigate the CSS panel, maybe it will override the virtual array!",
    description: "The 'background' is a shorthand property for setting all background properties at once, including color, image, origin, size, repeat method.",
    status: 'Backlog',
    priority: 'Low',
    type: 'Feature'
  },
  {
    id: 'TASK-9012',
    title: "The CSS parser is down, calculate the neural interface!",
    description: "The 'margin' property sets the margin area on all four sides of an element. It's a shorthand for margin-top, margin-right, margin-bottom, and margin-left.",
    status: 'Todo',
    priority: 'High',
    type: 'Bug'
  }
];

export const jsTags: HTMLTagTask[] = [
  {
    id: 'TASK-2290',
    title: "We need to compress the auxiliary JavaScript function!",
    description: "Variables are containers for storing data values. In JavaScript, you declare variables using 'var', 'let', or 'const'.",
    status: 'In Progress',
    priority: 'High',
    type: 'Feature'
  },
  {
    id: 'TASK-6734',
    title: "Try to parse the JSON feed, maybe it will connect the cross-platform pixel!",
    description: "Functions are blocks of code designed to perform a particular task. They execute when they are called or invoked.",
    status: 'Backlog',
    priority: 'Medium',
    type: 'Documentation'
  },
  {
    id: 'TASK-8821',
    title: "The API application is down, index the virtual protocol!",
    description: "Arrays are used to store multiple values in a single variable. Array indices start at 0, so the first element is array[0].",
    status: 'Done',
    priority: 'Low',
    type: 'Bug'
  }
];