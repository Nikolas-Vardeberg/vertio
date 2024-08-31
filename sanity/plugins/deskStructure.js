import { Globe, Browsers, Compass, SquareHalfBottom, Article, ChalkboardTeacher } from 'phosphor-react'

export const deskStructure = (S, context) =>
  S.list()
    .title('Vertio Studio')
    .items([
      // PAGES ------------------
      S.listItem()
        .title('Pages')
        .icon(Browsers)
        .child(
          S.list()
            .title('Sider')
            .items([
              S.documentTypeListItem("page").title("Homepage").icon(Browsers),
              S.documentTypeListItem("blog").title("Blogs").icon(Article),
              S.documentTypeListItem("websites").title("Case Studies").icon(ChalkboardTeacher),
            ]),
        ),
      // GLOBAL ------------------
      S.listItem()
        .title('Global')
        .icon(Globe)
        .child(
          S.list()
            .title('Global')
            .items([
              S.listItem()
                .title('Navigation')
                .icon(Compass)
                .child(
                  S.editor()
                    .id('navigation')
                    .schemaType('navigation')
                    .documentId('navigation')
                ),
              S.divider(),
              S.listItem()
                .title('Footer')
                .icon(SquareHalfBottom)
                .child(
                  S.editor()
                    .id('footer')
                    .schemaType('footer')
                    .documentId('footer')
                ),
            ])
        ),
    ])
