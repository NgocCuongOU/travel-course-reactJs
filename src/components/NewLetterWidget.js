function NewLetterWidget() {
  return (
    <aside className="single-sidebar-widget newsletter">
      <h4 className="widget-title">Đăng kí nhận tin mới nhất</h4>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            name=""
            id=""
            required=""
            className="form-control"
            placeholder="Nhập email của bạn..."
          />
        </div>
        <div className="form-btn">
          <button className="btn-sidebar">Gửi</button>
        </div>
      </form>
    </aside>
  );
}

export default NewLetterWidget;
