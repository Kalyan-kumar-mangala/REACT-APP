import react from "react";
function FirstComponent(props){
    const boxStyle = {
        backgroundColor: "#e3f2fd",
        border: "4px solid #1976d2",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "20px"
    };
    return(
        // Merge boxStyle with an explicit backgroundColor: use props.colour if provided, otherwise fall back to boxStyle.backgroundColor
        <div style={{ ...boxStyle, backgroundColor: props.colour ? props.colour : boxStyle.backgroundColor }}>
            <h1 style={{ border: "2px dashed #1976d2", padding: "10px", borderRadius: "6px" }}>This is my {props.id} component</h1>
            
        </div>
    )
}
export default FirstComponent;