import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MyButton = styled(Button)({
    backgroundColor: "#F63E7B",
    padding: "10px 20px",
    color: '#fff',

    "&: hover": {
        backgroundColor: '#f5719c'
    }

})

export default MyButton;