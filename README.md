<div style="text-align:center">

![New Tab Liberty](assets/icon128.png)

</div>

# New Tab Liberty Chrome Extension

**Main Goal:** Groove to your own browser's rhythm! New Tab Liberty is a far-out Chrome extension that lets you break
free from the corporate shackles and groove to your own beat. It's all about giving you the freedom to override those
stuffy new tab settings managed by your organization, so you can customize your browser's new tab experience the way
your inner hippie desires.

## Installation

Get your aura aligned with New Tab Liberty by following these steps:

1. Clone or download this blissful repository to your computer.

2. Fire up Google Chrome like it's 1969.

3. Type `chrome://extensions/` into the address bar and let the good vibes roll with the Enter key.

4. Tune into "Developer mode" in the cosmic top-right corner of the extensions page.

5. Channel your inner flower child and click the "Load unpacked" button.

6. Navigate to the groovy directory where you cloned or downloaded the New Tab Liberty extension and let it flow.

7. Feel the extension's energy as it awakens in your browser.

## Customizing Your New Tab Experience

New Tab Liberty offers you the freedom to customize your new tab experience in two exciting ways:

### 1. Develop Your Own Page

I've provided a simple `index.html` template in the "new-tab" folder to help you get started with creating your
personalized new tab page. Here's how to make it your own:

1. Locate the extension's directory on your computer.

2. Open the "new-tab" folder within the extension's directory.

3. Edit the `index.html` file using your preferred text editor or code editor.

4. Let your creativity flow as you customize the HTML, CSS, and JavaScript to create your dream new tab page.

5. Save your changes.

6. Whenever you open a new tab, you'll experience your unique creation.

### 2. Set Any URL for the New Tab

With New Tab Liberty, you can set any URL to be opened on the new tab. Follow these steps:

1. Locate the `background.js` file within the extension's directory.

2. In the `navigate` function, you'll see code like this:

   ```javascript
   function navigate(id) {
       return chrome.tabs.update(id, { url: 'new-tab/index.html' });
       // Modify the URL here to set any URL you desire.
   }

## Feedback and Issues

If you encounter any issues, have suggestions for improvement, or want to share your customized new tab page, don't
hesitate to [create an issue](https://github.com/eoniser/New-Tab-Liberty/issues) on our GitHub repository. I value your feedback
and would love to see what you come up with!

## License

This extension is released under the [MIT License](LICENSE). Embrace the freedom to use, modify, and share it as you see
fit.

#### ✌️ Peace, love, and infinite new tab possibilities! ✌️
