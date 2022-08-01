
import { createTheme } from '@mui/material/styles';

const Colors = {
  primary: "#3C4DEB",
  secondary: "#00FCA8",
  success: "#3BCEAC",
  info: "#00a2ff",
  danger: "#FF5722",
  warning: "#E3655B",
  dark: "#0e1b20",
  light: "#aaa",
  muted: "#abafb3",
  border: "#DDDFE1",
  inverse: "#2F3D4A",
  shaft: "#333",
  dove_gray: "#d5d5d5",
  body_bg: "#f3f6f9",
  ///////////////
  // Solid Color
  ///////////////
  white: "#fff",
  black: "#000",
};

const Theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true
            }
        }
    }
});

export default Theme;