export function RenderList() {
    const animals = [
        { label: 'Horse' },
        { label: 'Turtle' },
        { label: 'Elephant' },
        { label: 'Monkey' },
      ];
     return(
        <ul>
        {animals.map((e ,i)=>{
        <li key={i}>{e}</li>
        })}
        </ul>
    ) 
}