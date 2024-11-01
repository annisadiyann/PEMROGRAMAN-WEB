<?php
$rows = 5; // Jumlah baris piramida

for ($i = 1; $i <= $rows; $i++) {
    // Cetak spasi di sebelah kiri bintang
    echo str_repeat("&nbsp;", $rows - $i);
    // Cetak bintang di setiap baris
    echo str_repeat("*", 2 * $i - 1);
    echo "<br>";
}
?>
