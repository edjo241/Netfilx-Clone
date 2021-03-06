import React from 'react'
import {Item,Inner,Container,Pane,Image,Title,SubTitle} from './styles/jumbotron'

function Jumbotron({children,direction='row',...restProps}) {
  return (
      <Item {...restProps}>
    <Inner direction={direction}>
        {children}
    </Inner>
    </Item>
  )
}

export default Jumbotron

Jumbotron.Container= function JumbotronContiner({children,...restProps}){
    return <Container {...restProps}>{children}</Container>;
}

Jumbotron.Pane= function JumbotronPane({children,...restProps}){
    return <Pane {...restProps}>{children}</Pane>
}


Jumbotron.Title= function JumbotronTitle({children,...restProps}){
    return <Title {...restProps}>{children}</Title>;
}

Jumbotron.SubTitle= function JumbotronSubtitle({children,...restProps}){
    return <SubTitle {...restProps}>{children}</SubTitle>;
}

Jumbotron.Image= function JumbotronImage({children,...restProps}){
    return <Image {...restProps}/>
}