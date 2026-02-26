// IMPROVEMENTS (need to review)
// !We need to review focus/blur system, because it is too complicated.
// Slot is not selected by key navigation. if we use appendToBody mode. It is related to the new focus/blur approach.
// list scroll overlaps border
// updateDisabled methods to avoid a remount
// create update function for the list to avoid a remount
// disable change focused element on fast scroll appendToBody
// Should we add a list direction if we use staticList prop?

// FEATURES (TODO)
// opportunity to add empty groups without children
// select input text with mouse (now it is unselectable) (done - experimental)
// Add "+ Count elements" additional text if tags are hidden

// REQUESTS
// Investigate an ability to add a diff names but the same values, and check them.

// PERFORMANCE UPDATES TODO (List)
// 1. Do we need uncheck all checkboxes if group is partial checked or otherwise we need to check all checkboxes if group is partial checked?
// 2. Do we need to call disabled nodes and uncheck them? in adjustTreeItemOptions
// 3. Do we need this functionality with isAllDisabled because we uncheck everything in the start and then we can't check disabled node? in updateFlattedOptionStateWithChildren
