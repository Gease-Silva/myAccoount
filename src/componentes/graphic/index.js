import PieChart from "react-native-pie-chart";

export default function Graphic({ type }) {
  let colors = "";
  let cover = "";
  let num1, num2, num3, num4, num5;

  switch (type) {
    case "empty":
      cover = "#B4E4E4";
      //   colors = ['#67ADAD', "#A3EB88", "#CDEB88", "#EBE789", "#EBDB88"];
      num1 = 1;
      (num2 = 0), (num3 = 0), (num4 = 0), (num5 = 0);
      break;
    case "full":
      (cover = ""),
        // colors = ["#A3EB88", "#CDEB88", "#EBE789", "#EBDB88", "#EBCF88"]
        (num1 = Math.random()),
        (num2 = Math.random()),
        (num3 = Math.random()),
        (num4 = Math.random()),
        (num5 = Math.random());
  }

//   Possível erro de lógica: ao atribuir a variavel 'colors' a constante 'sliceColors' ocorre um erro. 
//   A quantidade de cores deve ser a mesma quantidade de dados presentes no series.

  const coverFill = cover;
  const series = [num1, num2, num3, num4, num5];
  const sliceColor = ["#67ADAD", "#A3EB88", "#CDEB88", "#EBE789", "#EBDB88"];
  return (
    <PieChart
      widthAndHeight={205}
      series={series}
      sliceColor={sliceColor}
      coverRadius={0.76}
      coverFill={coverFill}
    />
  );
}
