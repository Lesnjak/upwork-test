import { css } from 'styled-components'

const proximaNovaRegularTTF = './fonts/ProximaNovaBold/ProximaNovaRegular.ttf'
const proximaNovaRegularWOFF = './fonts/ProximaNovaBold/ProximaNovaRegular.woff'
const proximaNovaRegularEOT = './fonts/ProximaNovaBold/ProximaNovaRegular.eot'

export default css`

  @font-face {
    font-family: Proxima Nova;
    src: url('${proximaNovaRegularEOT}');
    src: url('${proximaNovaRegularTTF}') format('truetype'),
         url('${proximaNovaRegularWOFF}') format('truetype'),
  }
`
