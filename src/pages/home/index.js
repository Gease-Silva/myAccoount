import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import styles from "./styles";
import Label from "../../componentes/label";
import Svg, { Path } from "react-native-svg";
import Button from "../../componentes/button";
import NavBar from "../../componentes/navBar";
import PieChart from "react-native-pie-chart";
import Graphic from "../../componentes/graphic";

export default function login({ navigation }) {
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789, 537];
  const sliceColor = ["#fbd203", "#ffb300", "#ff9100", "#ff6c00", "#ff3c00"];

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#001E36", "#001E36", "#001E36", "#fff"]}
        style={styles.background}
      />

      <View style={{ marginEnd: "auto" }}>
        <Label type="titulo" texto="Olá, Usuário" />
      </View>

      <View style={styles.carteira}>
        <Label type="corpoBlack" texto="Carteira" />

        <View style={{ marginBottom: 8 }}></View>

        <View style={styles.reais}>
          <Label type="corpoBlack" texto="Reais" />
          <Label type="corpoBlack" texto="R$5.000,00" />
        </View>
      </View>

      <View style={styles.opcoes}>
        <View style={{ flexDirection: "row", width: "70%", marginEnd: "15%" }}>
          <Button text="Semana" type="leftSecondary" />
          <Button text="Renda" type="rightSecondary" />
        </View>

        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width={40}
          height={40}
          viewBox="0 0 40 40"
          fill="none"
        >
          <Path
            d="M20 40c10.922 0 20-9.059 20-20C40 9.078 30.902 0 19.98 0 9.04 0 0 9.078 0 20c0 10.941 9.059 20 20 20zm0-3.333c-9.255 0-16.647-7.412-16.647-16.667 0-9.235 7.373-16.667 16.627-16.667 9.236 0 16.667 7.432 16.687 16.667.02 9.255-7.432 16.667-16.667 16.667zm-.059-7.353c1.059 0 1.686-.726 1.686-1.863v-5.804h6.138c1.098 0 1.862-.569 1.862-1.608 0-1.059-.725-1.666-1.862-1.666h-6.138v-6.157c0-1.157-.627-1.863-1.686-1.863-1.04 0-1.608.745-1.608 1.863v6.157h-6.117c-1.157 0-1.883.607-1.883 1.666 0 1.04.785 1.608 1.883 1.608h6.117v5.804c0 1.098.569 1.863 1.608 1.863z"
            fill="#B5DDDA"
          />
        </Svg>
      </View>

      <View>
        <View style={styles.diaMes}>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={17}
            height={30}
            viewBox="0 0 17 30"
          >
            <Path
              d="M14.197 29.534a1.55 1.55 0 001.122.466c.899 0 1.572-.674 1.572-1.572 0-.431-.172-.829-.449-1.122L3.869 15.009 16.442 2.712c.276-.294.45-.709.45-1.123C16.891.69 16.217 0 15.318 0a1.55 1.55 0 00-1.122.466L.518 13.852A1.517 1.517 0 000 15.008c0 .431.19.829.518 1.157l13.679 13.368z"
              fill="#fff"
            />
          </Svg>

          <Label type="subTitulo" texto="01 ago - 01 ago" />

          <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={30}
            viewBox="0 0 18 30"
          >
            <Path
              d="M3.585.466A1.55 1.55 0 002.463 0C1.565 0 .89.674.89 1.572c0 .431.173.829.45 1.122l12.573 12.297L1.34 27.288c-.276.294-.449.709-.449 1.123 0 .898.674 1.589 1.572 1.589.449 0 .829-.173 1.122-.466l13.68-13.386c.327-.276.517-.708.517-1.157 0-.431-.19-.829-.518-1.157L3.585.466z"
              fill="#fff"
            />
          </Svg>
        </View>

        <View style={styles.gastos}>
          <View style={{ flexDirection: "row" }}>
            <Button text="Dia" type="leftPrimary" />
            <Button text="Semana" type="btnMid" />
            <Button text="Mês" type="btnMid" />
            <Button text="Ano" type="btnMid" />
            <Button text="Periodo" type="rightPrimary" />
          </View>

          <View style={{ alignItems: "center", marginHorizontal: 'auto', marginVertical: 'auto'}}>
           <Graphic
            type = 'empty'
           />
          </View>
        </View>
      </View>

      <NavBar />

      <StatusBar style="auto" />
    </View>
  );
}
