import { useEffect } from "react";

function Effect() {
    useEffect(() => {
        console.log("Page loaded")
    })
  return (
    <div>Effect</div>
  )
}

export default Effect