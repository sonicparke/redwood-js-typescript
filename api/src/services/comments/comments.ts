import type { QueryResolvers, CommentRelationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const comments = ({
  postId,
}: Required<Pick<Prisma.CommentWhereInput, 'postId'>>) => {
  return db.comment.findMany({ where: { postId } })
}

export const comment: QueryResolvers['comment'] = ({ id }) => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const Comment: CommentRelationResolvers = {
  ppost: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).ppost()
  },
}
