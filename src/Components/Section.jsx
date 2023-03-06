import './Section.css'
export default function Section(props) {
    return(
        <div className='section'>
        <img src={props.img} alt="" className='img'/>
        <p>{props.title}</p>
        <p>Year: {props.year}</p>
      </div>
    )
}