import "./colorPicker.css";
import { useDB } from "../../contexts/DevsUnitedContext";


function ColorPicker() {

    const { setSelectColor, selectColor, colors, devUser, setDevUser } = useDB();  
  
    const handleColor = (color) => {
      setDevUser({
        ...devUser,
        // color: selectColor.name,
        devColor: selectColor.hex
      });
      setSelectColor(color)
    
    }  
  
    const colorOption = (color) => {
      return (
        <div
          key={color.name}
          className="color"
          style={{ backgroundColor: color.hex }}
          // onClick={() => setSelectColor(color)}
          onClick={() => handleColor(color)}
        />
      );
    };
  
    const colorOptions = () => {
      return colors.map((color) => {
        return colorOption(color);
      });
    };

     // opcion 2
   
    return <div className="colorpicker">{colorOptions()}<br></br> {selectColor.name}</div>;
  }
  
  export default ColorPicker;
  