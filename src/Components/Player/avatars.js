export const createAvatarConfig = (player) => {
  // Different configs for X and O players
  if (player === 'X') {
    return {
      id: 'player-x',
      sex: 'man',
      skinColor: '#F5CBA7',
      hairStyle: 'normal',
      hairColor: '#2C3E50',
      shirtStyle: 'hoody',
      shirtColor: '#FF6B6B',
      bgColor: '#FF6B6B22',
      earSize: 'small',
      eyeStyle: 'circle',
      noseStyle: 'short',
      mouthStyle: 'smile',
      glassesStyle: 'none',
      hatStyle: 'none',
      hatColor: '#000',
    };
  } else {
    return {
      id: 'player-o',
      sex: 'woman',
      skinColor: '#F0C27A',
      hairStyle: 'thick',
      hairColor: '#8B4513',
      shirtStyle: 'polo',
      shirtColor: '#4ECDC4',
      bgColor: '#4ECDC422',
      earSize: 'small',
      eyeStyle: 'oval',
      noseStyle: 'long',
      mouthStyle: 'lips',
      glassesStyle: 'none',
      hatStyle: 'none',
      hatColor: '#000',
    };
  }
};

// Random avatar generator for variety
export const createRandomAvatarConfig = (player) => {
  const hairStyles = ['normal', 'thick', 'mohawk', 'womanLong', 'womanShort'];
  const hairColors = ['#000', '#2C3E50', '#8B4513', '#D4A574', '#C0392B'];
  const shirtStyles = ['hoody', 'polo', 'short'];
  const shirtColors = ['#FF6B6B', '#4ECDC4', '#95E1D3', '#F38181', '#AA96DA'];
  const skinColors = ['#F5CBA7', '#F0C27A', '#E0AC69', '#C68642', '#8D5524'];
  const eyeStyles = ['circle', 'oval', 'smile'];
  const mouthStyles = ['smile', 'lips', 'peace'];
  
  return {
    id: `player-${player}-${Date.now()}`,
    sex: player === 'X' ? 'man' : 'woman',
    skinColor: skinColors[Math.floor(Math.random() * skinColors.length)],
    hairStyle: hairStyles[Math.floor(Math.random() * hairStyles.length)],
    hairColor: hairColors[Math.floor(Math.random() * hairColors.length)],
    shirtStyle: shirtStyles[Math.floor(Math.random() * shirtStyles.length)],
    shirtColor: shirtColors[Math.floor(Math.random() * shirtColors.length)],
    bgColor: player === 'X' ? '#FF6B6B22' : '#4ECDC422',
    earSize: 'small',
    eyeStyle: eyeStyles[Math.floor(Math.random() * eyeStyles.length)],
    noseStyle: 'short',
    mouthStyle: mouthStyles[Math.floor(Math.random() * mouthStyles.length)],
    glassesStyle: 'none',
    hatStyle: 'none',
    hatColor: '#000',
  };
};