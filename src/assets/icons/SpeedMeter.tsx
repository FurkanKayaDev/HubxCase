import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg
      width={17}
      height={17}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M16.997 13.265c0-.037-.002-.074-.003-.11l-.005-.113v-.028L16.987 13V12.963l-.001-.005-.004-.047-.014-.188-.004-.047-.006-.061-.011-.123-.012-.121-.006-.06a10.654 10.654 0 01-.008-.056c-.02-.148-.038-.293-.064-.432-.012-.07-.024-.139-.037-.205l-.04-.196c-.025-.127-.057-.245-.083-.355l-.02-.08-.022-.077-.04-.14c-.012-.044-.023-.086-.035-.123l-.033-.104-.037-.116a.088.088 0 00-.108-.058l-2.874.82a.088.088 0 00-.063.1l.01.058c.005.021.01.045.014.071.005.026.008.055.013.085l.015.096.008.052.006.055c.008.075.02.155.025.242l.011.131.007.138c.006.093.005.19.007.289v.036l-.001.032-.002.065-.002.065v.032l-.003.047-.008.187-.002.047v-.022.003l-.002.01-.001.018-.007.073-.006.073-.009.072c-.006.047-.01.094-.017.14l-.02.135-.022.128-.023.12-.023.113-.024.102-.01.047c-.005.013-.008.026-.011.038l-.006.022h3.515a.088.088 0 00.088-.084l.009-.202.004-.21c.002-.072 0-.144 0-.217l-.002-.11zM16.084 9.576a.088.088 0 00.047-.12l-.034-.07-.04-.085c-.019-.038-.04-.08-.06-.124l-.07-.14-.038-.07-.04-.073c-.026-.05-.053-.1-.083-.153l-.094-.161-.049-.084a39.319 39.319 0 01-.053-.084l-.109-.174c-.078-.116-.156-.236-.243-.354l-.065-.089-.032-.044-.034-.044-.136-.176c-.046-.058-.093-.115-.14-.171l-.07-.085-.073-.082-.072-.082a2.469 2.469 0 00-.072-.08l-.144-.153c-.047-.05-.097-.098-.143-.145-.047-.047-.093-.093-.14-.136l-.134-.126-.129-.114-.12-.105-.11-.09-.096-.08-.084-.065a84.392 84.392 0 01-.093-.071.088.088 0 00-.121.014l-1.543 1.867a.088.088 0 00.006.119l.044.044.054.053.06.064.07.073.074.084c.026.03.054.058.08.09a387 387 0 00.083.1c.03.034.057.07.086.108.028.037.058.073.087.113l.087.119.043.061.042.063c.015.02.029.042.043.063.015.021.028.043.042.065l.082.13.078.132.02.033.018.034.036.067c.05.087.093.177.137.262l.06.128.028.062c.01.02.018.04.026.061l.05.117.044.111.02.052c.007.017.015.035.019.049l.028.082.025.072.028.084.025.075c.017.048.07.072.117.054l2.675-1.075zM8.228 6.24l.078.011.09.016.103.018c.031.005.064.013.098.02l.973-1.992-.143-.022-.095-.014-.093-.012-.179-.02-.167-.015c-.054-.004-.105-.01-.154-.012l-.14-.007-.121-.006-.104-.001-.111-.002a.088.088 0 00-.09.084L8.086 6.14a.088.088 0 00.076.092l.067.009zM10.845 7.261a50.21 50.21 0 01.14.101l.034.026.035.026.063.047c.041.03.099.02.127-.022l1.27-1.937a.088.088 0 00-.029-.124l-.068-.04-.038-.021-.045-.026-.117-.064-.133-.073-.14-.07c-.05-.024-.1-.05-.154-.075l-.166-.076c-.057-.027-.116-.051-.177-.077-.06-.025-.122-.052-.186-.076a38.102 38.102 0 00-.049-.018l-.548 2.38.087.057.094.062zM6.521 6.231l.073-.01.071-.007.137-.014.128-.009.06-.004.055-.003.098-.002.086-.003h.09l.08-.001c.05 0 .09-.043.087-.094L7.37 4.338a.088.088 0 00-.099-.082l-.078.01-.091.012-.127.018-.144.022-.074.013-.077.015-.162.031-.173.04-.09.02-.091.024-.188.05c-.063.02-.128.039-.193.058l-.098.03-.097.034-.099.034a2.193 2.193 0 00-.098.035l-.196.075c-.066.025-.13.054-.194.08l-.096.041-.094.044-.093.043c-.03.014-.061.028-.091.044l-.178.09c-.058.028-.114.06-.169.09-.055.03-.109.06-.16.09l-.149.089c-.048.028-.093.059-.137.086l-.125.08-.11.076-.098.067c-.03.02-.056.041-.08.059l-.085.062a.088.088 0 00-.02.12l.725 1.066c.026.038.076.05.116.028l.065-.037.072-.04.085-.044.097-.051.11-.052c.037-.018.076-.039.118-.056l.129-.057c.044-.02.09-.038.137-.056.047-.019.094-.04.143-.057l.15-.054c.025-.01.051-.017.077-.026l.078-.025.078-.025.08-.023c.053-.015.106-.031.16-.045l.16-.04.081-.018c.027-.005.054-.01.08-.017l.08-.016c.026-.006.052-.01.078-.014l.155-.027.15-.021zM1.578 7.61c-.02.026-.038.053-.057.08l-.058.082c-.02.027-.037.055-.056.083l-.11.169-.105.171-.026.043-.025.044-.05.086c-.067.114-.125.23-.184.34l-.08.166-.04.08-.036.08-.068.152-.06.144-.053.132a233.253 233.253 0 01-.085.227l-.031.091-.031.093a.088.088 0 00.052.11l.675.259a.088.088 0 00.11-.044l.036-.074.037-.077.047-.09.052-.101.062-.111.067-.12.076-.126.04-.066.042-.066c.03-.044.059-.09.088-.135.064-.09.126-.185.196-.276l.052-.07.026-.034.027-.034.108-.137.112-.133c.02-.022.037-.045.057-.066l.058-.064.057-.063c.018-.02.037-.042.057-.061l.115-.12c.037-.038.077-.074.114-.11.037-.037.073-.073.11-.106l.107-.097c.034-.031.07-.06.102-.088l.094-.08.083-.065.072-.058c.01-.009.025-.019.037-.028a34.663 34.663 0 01.097-.074.088.088 0 00.014-.127l-.768-.9a.088.088 0 00-.129-.007l-.056.055-.032.03-.035.035-.085.086-.097.098-.1.107c-.033.038-.07.076-.106.118l-.111.129c-.039.043-.076.09-.114.138-.038.048-.079.095-.117.146l-.116.154c-.02.026-.04.052-.058.08zM.182 10.765l-.016.077-.018.09c-.007.032-.013.072-.02.111l-.022.129-.012.07-.01.07c-.012.099-.028.204-.038.316l-.017.172c-.005.058-.008.118-.012.18-.01.121-.012.248-.016.376L0 12.404v.048a2824.837 2824.837 0 01.001.194v.049l.003.048.007.194.002.049.001.015v.012l.003.023.006.093.007.092.01.095.009.093.004.047.006.045.022.177c.01.057.018.113.026.168.008.055.018.108.028.159l.002.012a.088.088 0 00.087.072h.238c.05 0 .09-.043.088-.093l-.003-.041-.008-.153-.005-.161v-.168l-.001-.043v-.043l.003-.086.002-.087.004-.092.004-.093.001-.024v-.013l.001.003V12.986l.004-.045.015-.181.003-.045.006-.045.01-.09.01-.09.005-.044.007-.045c.018-.117.034-.233.056-.344l.031-.163.035-.155c.02-.1.047-.195.07-.282l.016-.063.017-.06.033-.108.029-.096.028-.086.025-.075a.088.088 0 00-.06-.113l-.597-.159a.088.088 0 00-.11.068z"
        fill="#fff"
        fillOpacity={0.7}
      />
      <Path
        d="M6.93 13.855a1.372 1.372 0 001.94-.925l1.39-6.025.528-2.295.327-1.421c.038-.166-.093-.278-.225-.278a.216.216 0 00-.199.128l-.666 1.363-.983 2.011L6.3 12.02c-.333.68-.051 1.502.63 1.835zm.654-1.94a.673.673 0 110 1.345.673.673 0 010-1.345z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;