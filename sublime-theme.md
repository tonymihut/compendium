# Change the default/theme UI font for sublime text

### Step 1
Open the command pallete and look for "Browser Packages", hit enter, navigate to User, look for the **.sublime-theme**
file for the theme you want to modify and open it in the editor.
### Step 2
Paste in the following
```
[
  {
    "class": "sidebar_label",
    "font.face": "your-font-face-here"
  },
  {
    "class": "sidebar_heading",
    "font.face": "your-font-face-here"
  },
  {
    "class": "tab_label",
    "font.face": "your-font-face-here"
  },
  {
    "class": "label_control",
    "font.face": "your-font-face-here"
  },
  {
    "class": "quick_panel_label",
    "font.face": "your-font-face-here"
  },
  {
    "class": "quick_panel_path_label",
    "font.face": "your-font-face-here"
  }
]
```
### Step 3
Hit "SAVE"
### Step 4
*Profit*

#### Note
If there's no **.sublime-theme** file for your desired theme, you can create one but it might look messed up. What you can do in that case is copy existing settings from another theme file, and add in the font edits.