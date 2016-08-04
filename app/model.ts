class Base {
    public id: number
    public title: string

    public toString()
    {
        return this.title
    }

    public constructor(title) {
        this.title = title
    }
}

export class Bookmark extends Base {
    public url: string
    public date: string
    public era: number = 1
    public category: Category
    public tags: Tag[]
}

export class Category extends Base {
    public bookmarks: Bookmark[]
}

export class Tag extends  Base{
    public bookmarks: Bookmark[]
}