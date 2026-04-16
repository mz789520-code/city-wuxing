# 🌏 City Wuxing 城市五行

**全球城市的五行属性数据库。** 基于地理方位、经济结构、文化特征、自然环境综合判定。

目前没有任何开源项目对城市进行系统性的五行分类。本项目旨在建立第一个开放、可贡献的城市五行数据集。

## 五行分类标准

每座城市有一个**主属性**和一个**副属性**，判定依据：

| 五行 | 地理 | 经济 | 文化 | 自然 | 代表城市 |
|------|------|------|------|------|---------|
| 🌿 木 | 东方 | 教育/科技/农业 | 创新/成长/包容 | 森林/平原/植被丰富 | 成都、京都、杭州 |
| 🔥 火 | 南方 | 娱乐/餐饮/商业 | 热情/活力/社交 | 炎热/火山/灯火通明 | 曼谷、重庆、长沙 |
| ⛰️ 土 | 中央 | 传统产业/政府 | 保守/厚重/历史 | 高原/盆地/干燥 | 西安、北京、拉萨 |
| ✨ 金 | 西方 | 金融/制造/科技 | 秩序/效率/精致 | 矿产/金属建筑密集 | 上海、香港、新加坡 |
| 💧 水 | 北方 | 旅游/贸易/航运 | 流动/开放/多元 | 临海/临河/雨量充沛 | 厦门、巴厘岛、大理 |

> **注意：** 城市的五行属性不是绝对的。同一座城市的不同区域可能有不同的五行倾向（如上海陆家嘴偏金，法租界偏木）。本数据库以城市整体气质为准。

## 数据格式

```json
{
  "name": "成都",
  "name_en": "Chengdu",
  "country": "CN",
  "region": "西南",
  "primary_element": "木",
  "secondary_element": "土",
  "latitude": 30.5728,
  "longitude": 104.0668,
  "classification_basis": {
    "geography": "四川盆地，植被丰富，气候温润",
    "economy": "科技+消费驱动，新一线城市代表",
    "culture": "慢生活、包容、茶文化、创新氛围",
    "nature": "都江堰水系、青城山、平原沃土"
  },
  "signature_experiences": ["茶馆闲坐", "熊猫基地", "宽窄巷子漫步"],
  "best_for": ["需要放慢节奏的人", "寻找创作灵感的人"],
  "tags": ["慢生活", "美食", "自然", "文创"]
}
```

## 快速使用

### JavaScript / TypeScript

```bash
npm install city-wuxing
```

```typescript
import { cities, match, getByElement } from 'city-wuxing';

// 获取所有木属性城市
const woodCities = getByElement('木');

// 根据需要的五行匹配城市
const recommendations = match(['金', '水'], { limit: 5 });
```

### Python

```bash
pip install city-wuxing
```

```python
from city_wuxing import cities, match, get_by_element

wood_cities = get_by_element("木")
recommendations = match(["金", "水"], limit=5)
```

### REST API

```
GET https://city-wuxing.vercel.app/api/cities?element=金
GET https://city-wuxing.vercel.app/api/match?need=金,水&limit=5
```

## 当前覆盖

| 地区 | 城市数 | 状态 |
|------|--------|------|
| 中国大陆 | 30+ | ✅ 基础覆盖 |
| 日韩 | 10+ | ✅ 基础覆盖 |
| 东南亚 | 15+ | ✅ 基础覆盖 |
| 欧洲 | 15+ | 🔨 建设中 |
| 北美 | 10+ | 🔨 建设中 |
| 中东/非洲 | 5+ | 📋 计划中 |

## 贡献

欢迎 PR！添加新城市或修正现有分类。请遵循数据格式，并在 `classification_basis` 中说明判定理由。

详见 [CONTRIBUTING.md](./CONTRIBUTING.md)

## 理论基础

城市五行分类综合参考以下维度：

1. **地理方位** — 传统五行方位（东木南火西金北水中土）
2. **经济结构** — 主导产业的五行属性
3. **文化气质** — 城市性格与五行性格的对应
4. **自然环境** — 地形、水系、气候的五行归属
5. **城市能量** — 节奏快慢、人口流动性、创新活力

参考资料：
- [BaZi City Elements Guide (Coconote)](https://coconote.app/notes/c2fe7adc-a6b9-44ec-844b-cbc42d986200)
- [Nova Masters - How to Balance Your BaZi Element](https://novamastersconsulting.com/how-to-balance-your-bazi-element-a-practical-guide/)
- [Five Elements in Feng Shui (Douglas Chan)](https://dougleschan.com/5-elements/5-elements-feng-shui-the-complete-guide/)

## License

MIT
