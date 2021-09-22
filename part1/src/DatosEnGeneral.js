const DatosEnGeneral = (props) => {
    return <div> 
      <div style={{ color: props.color, border: props.border, width: props.width,margin: props.margin, padding: props.padding }}>
          {props.message}
        </div>
    </div>
  }

  export default DatosEnGeneral