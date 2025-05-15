import { ReverseButtonContainer } from "./styles"

const ReverseButton = ({label, onClick}) => {
    return(
    <ReverseButtonContainer onClick={onClick} type="button">
      {label}
    </ReverseButtonContainer>
    )
}

export default ReverseButton;