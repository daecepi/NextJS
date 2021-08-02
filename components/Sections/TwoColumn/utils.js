export const localOrientationManager = (orientation, html, html2) => {
  if(orientation.indexOf("Left")){
    return (
      <div className="grid grid-cols-2">
        {html}
        {html2}
      </div>
    );
  }else{
    <div className="grid grid-cols-2">
      {html2}
      {html}
    </div>
  }
}