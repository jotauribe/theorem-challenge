# Layouts

The layouts are helper components that views use to share common UI parts: header, footer, screen width, side padding.

When the user changes from one view to another, even if both views share the same layout, the layout component is loses its internal state. This is because of a shortcut in React’s reconciliation algorithm. This should not affect
