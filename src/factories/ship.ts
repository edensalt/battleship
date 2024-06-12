type ShipName = "carrier" | "battleship" | "destroyer" | "submarine" | "patrol_boat"

const Ship = (name: ShipName) => {

  let length = 0;

  switch (name) {
    case 'carrier':
      length = 5;
      break;
    case 'battleship':
      length = 4;
      break;
    case 'destroyer' || 'submarine':
      length = 3;
      break;
    case 'patrol_boat':
      length = 2;
      break;
  }

  let totalHits = 0;
  let sunk = false;

  const getTotalHits = () => totalHits

  const hit = () => {
    ++totalHits;
    if (totalHits === length) {
      sunk = true
    }
  }

  const isSunk = () => sunk

  return {
    length,
    hit,
    getTotalHits,
    isSunk
  }
}

export default Ship;