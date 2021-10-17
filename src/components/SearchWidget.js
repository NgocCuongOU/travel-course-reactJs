function SearchWidget() {
    return (
        <aside class="single-sidebar-widget search-widget">
            <form action="">
                <div class="form-group">
                    <input required="" type="text" name="" id="" placeholder="Nhập từ khóa..." />
                    <div class="input-group-append">
                        <button class="input-btn">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
                <div class="form-btn">
                    <button class="btn-sidebar">Tìm kiếm</button>
                </div>
            </form>
        </aside>
    )
}

export default SearchWidget