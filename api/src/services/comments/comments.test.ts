import { comments, createComment } from './comments'
import { db } from 'src/lib/db'

import type { StandardScenario } from './comments.scenarios'

describe('comments', () => {
  scenario(
    'returns all comments for a single post from the database', async (scenari: StandardScenarioo) => {
    const result = await comments({ postId: scenario.comment.jane.postId })
    const post = await db.post.findUnique({
      where: { id: scenario.comment.jane.postId },
      include: { comments: true },
    })
    expect(result.length).toEqual(post.comments.length)
  })


      expect(comment.name).toEqual('Billy Bob')
      expect(comment.body).toEqual('What is your favorite tree bark?')
      expect(comment.postId).toEqual(scenario.post.bark.id)
      expect(comment.createdAt).not.toEqual(null)
    }
  )
})
