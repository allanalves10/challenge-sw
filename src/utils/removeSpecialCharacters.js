export const removeSpecialCharacters = function (namePerson) {
    let namePersonLowerCase = namePerson.toLowerCase();

    namePersonLowerCase = namePersonLowerCase.replace(/ä|æ|ǽ/g, 'ae');
    namePersonLowerCase = namePersonLowerCase.replace(/ö|œ/g, 'oe');
    namePersonLowerCase = namePersonLowerCase.replace(/ü/g, 'ue');
    namePersonLowerCase = namePersonLowerCase.replace(/Ä/g, 'Ae');
    namePersonLowerCase = namePersonLowerCase.replace(/Ü/g, 'Ue');
    namePersonLowerCase = namePersonLowerCase.replace(/Ö/g, 'Oe');
    namePersonLowerCase = namePersonLowerCase.replace(
      /À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ|Α|Ά|Ả|Ạ|Ầ|Ẫ|Ẩ|Ậ|Ằ|Ắ|Ẵ|Ẳ|Ặ|А/g,
      'a'
    );
    namePersonLowerCase = namePersonLowerCase.replace(
      /à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª|α|ά|ả|ạ|ầ|ấ|ẫ|ẩ|ậ|ằ|ắ|ẵ|ẳ|ặ|а/g,
      'a'
    );
    namePersonLowerCase = namePersonLowerCase.replace(/Б/g, 'B');
    namePersonLowerCase = namePersonLowerCase.replace(/б/g, 'b');
    namePersonLowerCase = namePersonLowerCase.replace(/Ç|Ć|Ĉ|Ċ|Č/g, 'C');
    namePersonLowerCase = namePersonLowerCase.replace(/ç|ć|ĉ|ċ|č/g, 'c');
    namePersonLowerCase = namePersonLowerCase.replace(/Д/g, 'D');
    namePersonLowerCase = namePersonLowerCase.replace(/д/g, 'd');
    namePersonLowerCase = namePersonLowerCase.replace(/Ð|Ď|Đ|Δ/g, 'Dj');
    namePersonLowerCase = namePersonLowerCase.replace(/ð|ď|đ|δ/g, 'dj');
    namePersonLowerCase = namePersonLowerCase.replace(
      /È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě|Ε|Έ|Ẽ|Ẻ|Ẹ|Ề|Ế|Ễ|Ể|Ệ|Е|Э/g,
      'E'
    );
    namePersonLowerCase = namePersonLowerCase.replace(
      /è|é|ê|ë|ē|ĕ|ė|ę|ě|έ|ε|ẽ|ẻ|ẹ|ề|ế|ễ|ể|ệ|е|э/g,
      'e'
    );
    namePersonLowerCase = namePersonLowerCase.replace(/Ф/g, 'F');
    namePersonLowerCase = namePersonLowerCase.replace(/ф/g, 'f');
    namePersonLowerCase = namePersonLowerCase.replace(/Ĝ|Ğ|Ġ|Ģ|Γ|Г|Ґ/g, 'G');
    namePersonLowerCase = namePersonLowerCase.replace(/ĝ|ğ|ġ|ģ|γ|г|ґ/g, 'g');
    namePersonLowerCase = namePersonLowerCase.replace(/Ĥ|Ħ/g, 'H');
    namePersonLowerCase = namePersonLowerCase.replace(/ĥ|ħ/g, 'h');
    namePersonLowerCase = namePersonLowerCase.replace(/Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ|Η|Ή|Ί|Ι|Ϊ|Ỉ|Ị|И|Ы/g, 'I');
    namePersonLowerCase = namePersonLowerCase.replace(
      /ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı|η|ή|ί|ι|ϊ|ỉ|ị|и|ы|ї/g,
      'i'
    );
    namePersonLowerCase = namePersonLowerCase.replace(/Ĵ/g, 'J');
    namePersonLowerCase = namePersonLowerCase.replace(/ĵ/g, 'j');
    namePersonLowerCase = namePersonLowerCase.replace(/Ķ|Κ|К/g, 'K');
    namePersonLowerCase = namePersonLowerCase.replace(/ķ|κ|к/g, 'k');
    namePersonLowerCase = namePersonLowerCase.replace(/Ĺ|Ļ|Ľ|Ŀ|Ł|Λ|Л/g, 'L');
    namePersonLowerCase = namePersonLowerCase.replace(/ĺ|ļ|ľ|ŀ|ł|λ|л/g, 'l');
    namePersonLowerCase = namePersonLowerCase.replace(/М/g, 'M');
    namePersonLowerCase = namePersonLowerCase.replace(/м/g, 'm');
    namePersonLowerCase = namePersonLowerCase.replace(/Ñ|Ń|Ņ|Ň|Ν|Н/g, 'N');
    namePersonLowerCase = namePersonLowerCase.replace(/ñ|ń|ņ|ň|ŉ|ν|н/g, 'n');
    namePersonLowerCase = namePersonLowerCase.replace(
      /Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ|Ο|Ό|Ω|Ώ|Ỏ|Ọ|Ồ|Ố|Ỗ|Ổ|Ộ|Ờ|Ớ|Ỡ|Ở|Ợ|О/g,
      'O'
    );
    namePersonLowerCase = namePersonLowerCase.replace(
      /ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º|ο|ό|ω|ώ|ỏ|ọ|ồ|ố|ỗ|ổ|ộ|ờ|ớ|ỡ|ở|ợ|о/g,
      'o'
    );
    namePersonLowerCase = namePersonLowerCase.replace(/П/g, 'P');
    namePersonLowerCase = namePersonLowerCase.replace(/п/g, 'p');
    namePersonLowerCase = namePersonLowerCase.replace(/Ŕ|Ŗ|Ř|Ρ|Р/g, 'R');
    namePersonLowerCase = namePersonLowerCase.replace(/ŕ|ŗ|ř|ρ|р/g, 'r');
    namePersonLowerCase = namePersonLowerCase.replace(/Ś|Ŝ|Ş|Ș|Š|Σ|С/g, 'S');
    namePersonLowerCase = namePersonLowerCase.replace(/ś|ŝ|ş|ș|š|ſ|σ|ς|с/g, 's');
    namePersonLowerCase = namePersonLowerCase.replace(/Ț|Ţ|Ť|Ŧ|τ|Т/g, 'T');
    namePersonLowerCase = namePersonLowerCase.replace(/ț|ţ|ť|ŧ|т/g, 't');
    namePersonLowerCase = namePersonLowerCase.replace(/Þ|þ/g, 'th');
    namePersonLowerCase = namePersonLowerCase.replace(
      /Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ|Ũ|Ủ|Ụ|Ừ|Ứ|Ữ|Ử|Ự|У/g,
      'U'
    );
    namePersonLowerCase = namePersonLowerCase.replace(
      /ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ|υ|ύ|ϋ|ủ|ụ|ừ|ứ|ữ|ử|ự|у/g,
      'u'
    );
    namePersonLowerCase = namePersonLowerCase.replace(/Ƴ|Ɏ|Ỵ|Ẏ|Ӳ|Ӯ|Ў|Ý|Ÿ|Ŷ|Υ|Ύ|Ϋ|Ỳ|Ỹ|Ỷ|Ỵ|Й/g, 'Y');
    namePersonLowerCase = namePersonLowerCase.replace(/ẙ|ʏ|ƴ|ɏ|ỵ|ẏ|ӳ|ӯ|ў|ý|ÿ|ŷ|ỳ|ỹ|ỷ|ỵ|й/g, 'y');
    namePersonLowerCase = namePersonLowerCase.replace(/В/g, 'V');
    namePersonLowerCase = namePersonLowerCase.replace(/в/g, 'v');
    namePersonLowerCase = namePersonLowerCase.replace(/Ŵ/g, 'W');
    namePersonLowerCase = namePersonLowerCase.replace(/ŵ/g, 'w');
    namePersonLowerCase = namePersonLowerCase.replace(/Ź|Ż|Ž|Ζ|З/g, 'Z');
    namePersonLowerCase = namePersonLowerCase.replace(/ź|ż|ž|ζ|з/g, 'z');
    namePersonLowerCase = namePersonLowerCase.replace(/Æ|Ǽ/g, 'AE');
    namePersonLowerCase = namePersonLowerCase.replace(/ß/g, 'ss');
    namePersonLowerCase = namePersonLowerCase.replace(/ẞ/g, 'SS');
    namePersonLowerCase = namePersonLowerCase.replace(/Ĳ/g, 'IJ');
    namePersonLowerCase = namePersonLowerCase.replace(/ĳ/g, 'ij');
    namePersonLowerCase = namePersonLowerCase.replace(/Œ/g, 'OE');
    namePersonLowerCase = namePersonLowerCase.replace(/ƒ/g, 'f');
    namePersonLowerCase = namePersonLowerCase.replace(/ξ/g, 'ks');
    namePersonLowerCase = namePersonLowerCase.replace(/π/g, 'p');
    namePersonLowerCase = namePersonLowerCase.replace(/β/g, 'v');
    namePersonLowerCase = namePersonLowerCase.replace(/μ/g, 'm');
    namePersonLowerCase = namePersonLowerCase.replace(/ψ/g, 'ps');
    namePersonLowerCase = namePersonLowerCase.replace(/Ё/g, 'Yo');
    namePersonLowerCase = namePersonLowerCase.replace(/ё/g, 'yo');
    namePersonLowerCase = namePersonLowerCase.replace(/Є/g, 'Ye');
    namePersonLowerCase = namePersonLowerCase.replace(/є/g, 'ye');
    namePersonLowerCase = namePersonLowerCase.replace(/Ї/g, 'Yi');
    namePersonLowerCase = namePersonLowerCase.replace(/Ж/g, 'Zh');
    namePersonLowerCase = namePersonLowerCase.replace(/ж/g, 'zh');
    namePersonLowerCase = namePersonLowerCase.replace(/Х/g, 'Kh');
    namePersonLowerCase = namePersonLowerCase.replace(/х/g, 'kh');
    namePersonLowerCase = namePersonLowerCase.replace(/Ц/g, 'Ts');
    namePersonLowerCase = namePersonLowerCase.replace(/ц/g, 'ts');
    namePersonLowerCase = namePersonLowerCase.replace(/Ч/g, 'Ch');
    namePersonLowerCase = namePersonLowerCase.replace(/ч/g, 'ch');
    namePersonLowerCase = namePersonLowerCase.replace(/Ш/g, 'Sh');
    namePersonLowerCase = namePersonLowerCase.replace(/ш/g, 'sh');
    namePersonLowerCase = namePersonLowerCase.replace(/Щ/g, 'Shch');
    namePersonLowerCase = namePersonLowerCase.replace(/щ/g, 'shch');
    namePersonLowerCase = namePersonLowerCase.replace(/Ъ|ъ|Ь|ь/g, '');
    namePersonLowerCase = namePersonLowerCase.replace(/Ю/g, 'Yu');
    namePersonLowerCase = namePersonLowerCase.replace(/ю/g, 'yu');
    namePersonLowerCase = namePersonLowerCase.replace(/Я/g, 'Ya');
    namePersonLowerCase = namePersonLowerCase.replace(/я/g, 'ya');
  
    return namePersonLowerCase;
  };