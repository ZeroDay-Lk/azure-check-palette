
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    ja: {
      translation: {
        generalInfo: '一般情報',
        sslCertificate: 'SSL証明書',
        headers: 'ヘッダー',
        dnsRecords: 'DNSレコード',
        security: 'セキュリティ',
        serverInfo: 'サーバー情報',
        location: 'サーバーの場所',
        country: '国',
        timezone: 'タイムゾーン',
        languages: '言語',
        currency: '通貨',
        coordinates: '座標',
        subject: '件名',
        issuer: '発行者',
        algorithm: 'アルゴリズム',
        expires: '有効期限',
        renewed: '更新日',
        fingerprint: 'フィンガープリント',
        status: 'ステータス',
        responseTime: '応答時間',
        openPorts: 'オープンポート',
        closedPorts: 'クローズドポート',
        online: 'オンライン',
        offline: 'オフライン',
        yes: 'はい',
        no: 'いいえ',
        threats: '脅威',
        blockLists: 'ブロックリスト',
        carbonFootprint: 'カーボンフットプリント',
        phishingStatus: 'フィッシング状態',
        malwareStatus: 'マルウェア状態',
        noThreatsFound: '脅威は見つかりませんでした',
        initialSize: '初期サイズ',
        co2Load: 'CO2負荷',
        energyUsage: 'エネルギー使用量',
        cookies: 'クッキー',
        socialTags: 'ソーシャルタグ',
        archiveHistory: 'アーカイブ履歴',
        redirects: 'リダイレクト',
        externalTools: '外部ツール'
      }
    }
  },
  lng: 'ja',
  fallbackLng: 'ja',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
