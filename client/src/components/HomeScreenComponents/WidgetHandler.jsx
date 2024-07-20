function WidgetHandler({ id, widget, deleteWidget }) {
  return (
    <div>
      <h1>{widget}</h1>
      <button onClick={() => deleteWidget(id)}>delete</button>
    </div>
  );
}

export default WidgetHandler;
