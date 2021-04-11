The correct syntax of HTML5 doctype is:

<!Doctype HTML>

Doctype is the first piece of code to write in HTML5 to **inform a browser that the document being rendered is an HTML document**. <!doctype html>, <!Doctype HTML> or <!DOCTYPE HTML> all are the same because the doctype keyword is **not case sensitive**.

The declaration is not an HTML tag. It is an “information” to the browser about what document type to expect.


# Question: Which of the following are three modes that are defined by layout engineers in web browsers?

- **Quirks mode** refers to a strategy used by some web browsers to preserve backward compatibility with web pages built for old web browsers, rather than solely complying with standard W3C and IETF requirements in the standards mode.

- **"Almost standards"** mode rendering matches “full standards” mode in all details except, the image layout inside table cells is treated in the same way that “quirks” mode works. This means that sliced image-in-table layouts are less likely to collapse in browsers in either “quirks” or “almost normal” mode than in “full standards” mode.

- **Full standards** mode In this mode, the behavior described is the same as described by HTML and CSS specifications. Most of the modern browsers use full standard mode.

** When <!Doctype HTML> appears at the top of an HTML page, **Full standards** mode is enabled


# Question: Will adding any non-executing code, e.g. comments, before the DOCTYPE declaration have any effect? Why?

- Yes, anything before the DOCTYPE, like a comment or an XML declaration will trigger quirks mode in Internet Explorer 9 and older.

**Not defining Doctype causes quirks mode to be activated**

---

# HTML Fundamentals

## Question: How do you define HMTL5?

- HTML5 is the most recent rendition of the Hypertext Markup Language, also referred to as the WWW (World Wide Web)'s fundamental language. This markup language augments a text file with bits of code, and this code, which we call markup, describes the structure of the document.

## What are W3C and WHATWG?

The **World Wide Web Consortium (W3C)** is a community of developers working towards setting global standards for development.

**WHATWG** is short for **Web Hypertext Application Technology Working Group**. It was created during a W3C workshop by Apple, Mozilla and Opera Software in 2004. WHATWG is a community of developers focused on setting HTML standards to improve on user needs.


## What are tags in HTML?

- An HTML tag tells the browser how to render the HTML web page in a certain defined format. HTML uses angular brackets, < and >, to enclose the tags, the symbol / for closing the tag, and is used for many reasons like:

    - changing the appearance of text,
    - showing a graphic,
    - linking to another web page.

## What is an attribute in HTML?

- All HTML elements can have attributes that **give added information about an element**.

- Attributes are placed directly after the name of a tag, inside the two angled brackets. Attributes **only appear in opening tags or in self-closing tags**. They can not be used within closing tags. Attributes usually come in name/value pairs, like name="value".

