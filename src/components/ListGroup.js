import React from 'react'


function ListGroup(props) {
    const {selectedGenre , onGenreChange, itemsList , textProperty , valueProperty} = props
  return (
    <div>
      <ul className="list-group">

        {itemsList.map((genre) => (
          <li
            key={genre[valueProperty]}
            className={
              selectedGenre &&  selectedGenre.name === genre[textProperty]
                ? "list-group-item active"
                : "list-group-item"
            }
            aria-current="true"
            onClick={()=>onGenreChange(genre)}
          >
            {genre[textProperty]}
          </li>
        ))}
      </ul>
    </div>
  );
}

ListGroup.defaultProps = {
  textProperty:'name',
  valueProperty:"_id"
}
export default ListGroup