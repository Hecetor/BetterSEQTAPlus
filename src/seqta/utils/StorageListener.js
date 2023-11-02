/* global chrome */

import {
  CreateBackground,
  CreateCustomShortcutDiv,
  RemoveBackground,
  RemoveShortcutDiv,
  addShortcuts,
  disableNotificationCollector,
  enableNotificationCollector,
} from "../../SEQTA.js";
import { updateBgDurations } from "../ui/Animation.js";
import { getDarkMode, updateAllColors } from "../ui/colors/Manager.js";

export default class StorageListener {
  constructor() {
    this.darkMode = getDarkMode();
    chrome.storage.onChanged.addListener(this.handleStorageChanges.bind(this));
  }

  handleStorageChanges(changes) {
    Object.keys(changes).forEach((changeKey) => {
      switch (changeKey) {

      case "selectedColor":
        this.handleSelectedColorChange(changes.selectedColor.newValue);
        break;

      case "shortcuts":
        this.handleShortcutsChange(
          changes.shortcuts.oldValue,
          changes.shortcuts.newValue
        );
        break;

      case "DarkMode":
        this.darkMode = changes.DarkMode.newValue;
        console.log(this.darkMode);
        break;

      case "customshortcuts":
        if (changes.customshortcuts.newValue) {
          this.handleCustomShortcutsChange(
            changes.customshortcuts.oldValue,
            changes.customshortcuts.newValue
          );
        }
        break;

      case "notificationcollector":
        this.handleNotificationCollectorChange(changes.notificationcollector);
        break;

      case "bksliderinput":
        updateBgDurations(changes.bksliderinput.newValue);
        break;

      case "animatedbk":
        if (changes.animatedbk.newValue) {
          CreateBackground();
        } else {
          RemoveBackground();
          document.getElementById("container").style.background = "var(--background-secondary)";
        }
        break;

      // Add default case if you need to handle a case where changeKey does not match any case
      default:
        // Handle unknown changeKey if necessary
        break;
      }
    });
  }  

  handleSelectedColorChange(newColor) {
    try {
      updateAllColors(this.darkMode, newColor);
    } catch (err) {
      console.error(err);
    }
  }

  handleNotificationCollectorChange(details) {
    if (details.newValue) {
      enableNotificationCollector();
    } else {
      disableNotificationCollector();
    }
  }

  handleCustomShortcutsChange(oldValue, newValue) {
    // Check for addition
    if (newValue.length > oldValue.length) {
      CreateCustomShortcutDiv(newValue[oldValue.length]);
    }
    // Check for removal
    else if (newValue.length < oldValue.length) {
      const removedElement = oldValue.find(
        (oldItem) =>
          !newValue.some(
            (newItem) => JSON.stringify(oldItem) === JSON.stringify(newItem)
          )
      );

      if (removedElement) {
        RemoveShortcutDiv(removedElement);
      }
    }
  }

  handleShortcutsChange(oldValue, newValue) {
    // Find Added Shortcuts
    const addedShortcuts = newValue.filter(newItem => {
      const isAdded = oldValue.some(oldItem => {
        const match = oldItem.name === newItem.name;
        const wasDisabled = !oldItem.enabled;
        const isEnabled = newItem.enabled;        
        return match && wasDisabled && isEnabled;
      });
    
      return isAdded;
    });
  
    // Find Removed Shortcuts
    const removedShortcuts = newValue.filter(newItem => {
      const isRemoved = oldValue.some(oldItem => {
        const match = oldItem.name === newItem.name;
        const wasEnabled = oldItem.enabled;  // Was enabled in the old array
        const isDisabled = !newItem.enabled;  // Is disabled in the new array
        
        return match && wasEnabled && isDisabled;
      });
    
      return isRemoved;
    });

    // Add new shortcuts to the UI
    addShortcuts(addedShortcuts);
  
    // Remove deleted shortcuts from the UI
    RemoveShortcutDiv(removedShortcuts);
  }  
}