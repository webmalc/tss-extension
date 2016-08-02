export class Bookmark {
    public title: string;
    public date: string;
    public category: Category;
    public tags: Tag;
}

export class Category {
    public title: string;
    public bookmarks: Bookmark[];
}

export class Tag {
    public title: string;
    public bookmarks: Bookmark[];
}