import { Box, Divider, Grid, Link as MuiLink, Tooltip, Typography, styled } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { FC, memo, useEffect, useState } from 'react'

import { rawTypeProps } from '@/shared/types/home'

import { PostList } from './PostList'
import { PostTable } from './PostTable'

type Props = {
  data: any
}

const Root = styled(Box)(({ theme }) => ({
  '& .code': {
    background: '#f6f6f6',
    border: '1px solid #ccc',
    fontFamily: 'monospace',
    borderRadius: 4,
    padding: '8px 13px',
  },
}))

const PostTextContent = memo(({ data, variant }: any) => {
  const isHasAChild = data.children
  const italic = data.italic ? 'italic' : 'unset'
  const underline = data.underline ? 'underline' : 'none'

  return (
    <Box sx={{ display: 'inline' }}>
      {data.type === rawTypeProps[2] ? (
        <Tooltip title={data.title ? data.title : ''}>
          <MuiLink href={data.href} target={data.openInNewTab ? '_blank' : ''} rel="noopener noreferrer">
            {data?.children?.map((content: any, index: number) => (
              <Typography
                key={`link__${index}`}
                variant={variant ? variant : data.bold ? 'body2' : 'body1'}
                sx={{
                  display: 'inline',
                  fontStyle: italic,
                  textDecoration: underline,
                }}
                component="div"
              >
                {content.text}
              </Typography>
            ))}
          </MuiLink>
        </Tooltip>
      ) : (
        <>
          {!isHasAChild && data.text?.trim().length ? (
            <>
              {!isHasAChild && data.code ? (
                <Typography
                  variant={variant ? variant : data.bold ? 'body2' : 'body1'}
                  sx={{
                    fontStyle: italic,
                    textDecoration: underline,
                    display: 'inline',
                  }}
                  component="div"
                  className={data.code ? 'code' : ''}
                >
                  {data.text}
                </Typography>
              ) : (
                <Typography
                  variant={variant ? variant : data.bold ? 'body2' : 'body1'}
                  sx={{
                    fontStyle: italic,
                    textDecoration: underline,
                    fontWeight: data.bold && 700,
                    display: 'inline',
                  }}
                  component="div"
                >
                  {data.text}
                </Typography>
              )}
            </>
          ) : (
            <br />
          )}
        </>
      )}
    </Box>
  )
})

export const PostContent: FC<Props> = ({ data }) => {
  const [variant, setVariant] = useState<Variant>('body1')
  const [looped, setLooped] = useState<number>(0)
  const [content, setContent] = useState<string[]>([])
  const globalArr: any = []

  const hasChildren = (data: any) => {
    const isHasAChild = data.children?.length

    if (isHasAChild > 0) {
      data.children.forEach((child: any) => {
        hasChildren(child)
        setLooped(looped + 1)
      })
    } else {
      globalArr.push(data.text)
    }
  }

  useEffect(() => {
    const checkContent = () => {
      hasChildren(data)

      // @ts-ignore
      setContent([...new Set(globalArr)])
    }

    data.type === rawTypeProps[4] ? checkContent() : null

    switch (data.type) {
      case rawTypeProps[8]:
        setVariant('h1')
        break
      case rawTypeProps[9]:
        setVariant('h2')
        break
      case rawTypeProps[10]:
        setVariant('h3')
        break
      case rawTypeProps[11]:
        setVariant('h4')
        break
      case rawTypeProps[12]:
        setVariant('h5')
        break
      case rawTypeProps[13]:
        setVariant('h6')
        break

      default:
        break
    }
  }, [])

  return (
    <Root my={2}>
      {/* paragraph */}
      {data.type === rawTypeProps[0] &&
        data.children.map((content: any, index: number) => (
          <PostTextContent key={`paragraph__${index}`} data={content} />
        ))}
      {/* title */}
      {variant !== 'body1' &&
        data.children.map((content: any, index: number) => (
          <PostTextContent data={content} key={`titles__${index}`} variant={variant} />
        ))}
      {/* quote */}
      {data.type === rawTypeProps[3] &&
        data.children.map((content: any, index: number) => (
          <Grid container columnSpacing={2} my={2} key={`quote__${index}`}>
            <Grid item>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item>
              <PostTextContent data={content} />
            </Grid>
          </Grid>
        ))}
      {/* image */}
      {data.type === rawTypeProps[1] && (
        <Grid item xs={'auto'}>
          <img src={data.src} alt={data.title} />
        </Grid>
      )}

      {/* class */}
      {data.type === rawTypeProps[4] &&
        content.map((item: string, index: number) => (
          <Box key={`recursia__${index}`}>
            {item.trim().length ? (
              <Typography component={'div'}>
                {item} — {looped}
              </Typography>
            ) : null}
          </Box>
        ))}

      {/* table */}
      {data.type === rawTypeProps[5] &&
        data.children.map((child: any, index: number) => <PostTable data={child} key={index} />)}

      {/* numbered-list */}
      {data.type === rawTypeProps[6] && <PostList data={data} variant={data.type} />}

      {/* bullet-list */}
      {data.type === rawTypeProps[7] && <PostList data={data} variant={data.type} />}

      {/* code-block */}
      {data.type === rawTypeProps[14] &&
        data.children.map((content: any, index: number) => (
          <Typography key={index} component="pre" className="code">
            {content.text}
          </Typography>
        ))}
      {/* iframe */}
      {data.type === rawTypeProps[15] && (
        <iframe
          width={data.width}
          height={data.height}
          src={data.url}
          title={data.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </Root>
  )
}
