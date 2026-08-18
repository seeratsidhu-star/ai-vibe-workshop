export const splats = [
  { id: "1", name: "File Name", visible: false },
  { id: "2", name: "File Name", visible: true },
  { id: "3", name: "File Name", visible: true },
  {
    id: "4",
    name: "Longer File Name That Fills This Space Would Look....",
    visible: true,
  },
];

export const toolbarGroups = [
  [
    { id: "folder", type: "modus", icon: "folder_open", label: "Open folder" },
    { id: "settings", type: "modus", icon: "settings", label: "Settings" },
    { id: "layout", type: "asset", src: "/gaussian-splatting/icon-layout.svg", label: "Layout" },
  ],
  [
    { id: "drop-0", type: "asset", src: "/gaussian-splatting/icon-drop-0.svg", label: "Density 0%" },
    { id: "drop-50", type: "asset", src: "/gaussian-splatting/icon-drop-50.svg", label: "Density 50%" },
    { id: "drop-80", type: "asset", src: "/gaussian-splatting/icon-drop-80.svg", label: "Density 80%" },
    { id: "drop-100", type: "asset", src: "/gaussian-splatting/icon-drop-100.svg", label: "Density 100%" },
  ],
  [
    { id: "crop", type: "modus", icon: "crop", label: "Crop splat" },
    { id: "move", type: "modus", icon: "move", label: "Move splat" },
    { id: "rotate", type: "modus", icon: "object_rotate", label: "Rotate splat" },
    { id: "select", type: "modus", icon: "box_select", label: "Box select" },
  ],
];
