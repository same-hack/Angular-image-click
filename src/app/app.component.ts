import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ユーザの配列
  // ※画像は必ずassetsに格納すること
  users = [
    {
      name: 'サメハック',
      age: 30,
      id: 0,
      path: '../assets/images/samehack.png',
    },
    { name: 'ねこハック', age: 31, id: 1, path: '../assets/images/neko.png' },
    { name: 'いぬハック', age: 40, id: 2, path: '../assets/images/inu.png' },
    { name: 'ぶたハック', age: 23, id: 3, path: '../assets/images/buta.png' },
  ];

  /**
   * 選択された画像のindexが入る
   * 赤枠で囲うCSSを適用するために使用
   */
  selectedItem: number | null;
  /**選択されたユーザ */
  selectedUser: any;

  /**画像クリックで動く */
  onSelectItem(index: number) {
    // 同じ画像をクリックすると、選択中表示を外す
    if (this.selectedItem === index) {
      this.selectedItem = null;
      this.selectedUser = null;
      return;
    }

    // 選択中の画像を更新
    this.selectedItem = index;
    this.selectedUser = this.users[index];
  }
}
