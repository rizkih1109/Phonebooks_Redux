export default function Avatar() {
    return (
        <form className="formCon">
            <input type="file" />
            <img src="../images/Defaultavatar.png" alt='no source' />
            <div>
                <i class="fa-solid fa-floppy-disk"></i>
                <i class="fa-solid fa-arrow-rotate-left"></i>
            </div>
        </form>
    )
}