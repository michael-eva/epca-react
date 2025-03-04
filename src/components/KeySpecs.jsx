// Single spec item component
const KeySpecItem = ({ value, unit, label }) => (
  <div className="text-center">
    <div className="text-3xl font-bold mb-2">
      {value}<span className="text-xl">{unit}</span>
    </div>
    <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ 
      __html: label.replace(/\n/g, '<br />') 
    }} />
  </div>
);

// Main KeySpecs component
const KeySpecs = ({ specs }) => (
  <div className="flex gap-24 mb-16 justify-center px-4">
    {specs.map((spec, index) => (
      <KeySpecItem 
        key={index}
        value={spec.value}
        unit={spec.unit}
        label={spec.label}
      />
    ))}
  </div>
);

export default KeySpecs;