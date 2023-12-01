interface PriceProps {
    totalSupply?: number;
    maxSupply?: number;
  }
  

  const Price: React.FC<PriceProps> = ({ totalSupply, maxSupply }) => {
    return (
      <div>
        <h2>Price Component</h2>
        <p>Total Supply: {totalSupply}</p>
        <p>Max Supply: {maxSupply}</p>
        {/* 추가적인 Price 컴포넌트 내용 */}
      </div>
    );
  };
  

export default Price;