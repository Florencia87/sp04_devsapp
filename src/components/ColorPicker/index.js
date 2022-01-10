import "./colorPicker.css";
import { useDB } from "../../contexts/DevsUnitedContext";

function ColorPicker() {

    const { setSelectColor, selectColor, colors } = useDB();;  
  
    const colorOption = (color) => {
      return (
        <div
          key={color.name}
          className="color"
          style={{ backgroundColor: color.hex }}
        //   onClick={() => setSelectColor(color)}
          onClick={() => setSelectColor(color)}
        />
      );
    };
  
    const colorOptions = () => {
      return colors.map((color) => {
        return colorOption(color);
      });
    };
  
    return <div className="colorpicker">{colorOptions()}<br></br> {selectColor.name}</div>;
  }
  
  export default ColorPicker;
  