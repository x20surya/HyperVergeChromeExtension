function WidgetHandler({ id, widget, deleteWidget }) {
  return (
    <>
      <h1>{widget}</h1>
      <button onClick={() => deleteWidget(id)}>delete</button>
    </>
  );
}

export default WidgetHandler;
