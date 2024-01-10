import "../assets/styles/Divider/divider.css";
import Header from "../components/header";
function Divider(params) {
  return (
    <>
      <div className="divider_wrapper">
        <Header title={params.title} color={params?.color}/>
        {params.component}</div>
    </>
  );
}
export default Divider;
