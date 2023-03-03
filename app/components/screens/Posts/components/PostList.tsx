import { Box, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

import { rawTypeProps } from '@/shared/types/home'

type Props = {
  data: any
  variant: 'numbered-list' | 'bulleted-list'
  index?: number
}

const ListRecursive = ({ data, index, variant }: Props) => (
  <Box sx={{ display: 'flex' }}>
    {variant === 'numbered-list' && <Typography mr={0.5}>{index}.</Typography>}
    {variant === 'bulleted-list' && <Typography mr={0.5}>•</Typography>}
    {data.children?.map((listItem: any, listItemID: number) => (
      <Box key={listItemID}>
        {listItem.children?.map((child: any, childID: number) => (
          <Typography key={childID} component="div">
            {child.text ? (
              <>{child.text}</>
            ) : (
              <Grid mt={3}>
                <PostList data={child} index={childID + 1} variant={variant} />
              </Grid>
            )}
          </Typography>
        ))}
      </Box>
    ))}
  </Box>
)

export const PostList: FC<Props> = ({ variant, data }) => (
  <Grid container>
    {data.children?.map((listItem: any, listID: number) => (
      <Grid item key={listID} xs={12} my={1}>
        <ListRecursive data={listItem} index={listID + 1} key={listID} variant={variant} />
      </Grid>
    ))}
  </Grid>
)
